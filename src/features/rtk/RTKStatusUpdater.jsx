import delay from 'delay';
import isNil from 'lodash-es/isNil';
import mapValues from 'lodash-es/mapValues';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateRTKStatistics } from '~/features/rtk/slice';
import useMessageHub from '~/hooks/useMessageHub';

/**
 * Component that renders nothing but constantly queries the server for the
 * current RTK status and dispatches actions to update the local store.
 */
const RTKStatusUpdater = ({ onStatusChanged }) => {
  const messageHub = useMessageHub();

  useEffect(() => {
    const valueHolder = {
      finished: false,
      promise: null,
    };

    const updateStatus = async () => {
      while (!valueHolder.finished) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const status = await messageHub.query.getRTKStatus();
          onStatusChanged(status);
        } catch (error) {
          console.error(error);
        }

        // eslint-disable-next-line no-await-in-loop
        await delay(1000);
      }
    };

    valueHolder.promise = updateStatus();

    return () => {
      valueHolder.finished = true;
      valueHolder.promise = null;
    };
  }, [messageHub, onStatusChanged]);

  return null;
};

export default connect(
  // mapStateToProps
  () => ({}),
  // mapDispatchToProps
  (dispatch) => ({
    onStatusChanged: (status) => {
      const { antenna = {}, messages = {}, cnr = {} } = status;
      const now = Date.now();

      let position;
      let height;

      if (antenna.position) {
        position = [antenna.position[1] / 1e7, antenna.position[0] / 1e7];
        height =
          antenna.position[2] !== undefined
            ? antenna.position[2] / 1e3
            : undefined;
      }

      dispatch(
        updateRTKStatistics({
          antenna: {
            descriptor: String(antenna.descriptor || ''),
            serialNumber: String(antenna.serialNumber || ''),
            stationId: isNil(antenna.stationId)
              ? undefined
              : Number(antenna.stationId),
            position,
            height,
          },
          messages: mapValues(messages, (messageStat) => ({
            lastUpdatedAt: now - messageStat[0],
            bitsPerSecond: messageStat[1],
          })),
          cnr: mapValues(cnr, (cnrValue) => ({
            lastUpdatedAt: now,
            cnr: cnrValue,
          })),
        })
      );
    },
  })
)(RTKStatusUpdater);
