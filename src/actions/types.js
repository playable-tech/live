/**
 * @file Central repository of action type constants used in the app.
 */

// Connection-related actions for the server itself
export const DISCONNECT_FROM_SERVER = 'DISCONNECT_FROM_SERVER';

// Map-related actions
export const SELECT_MAP_SOURCE = 'SELECT_MAP_SOURCE';
export const SELECT_MAP_TOOL = 'SELECT_MAP_TOOL';
export const SET_SELECTED_FEATURES = 'SET_SELECTED_FEATURES';
export const ADD_FEATURES_TO_SELECTION = 'ADD_FEATURES_TO_SELECTION';
export const SELECT_ALL_UAV_FEATURES = 'SELECT_ALL_UAV_FEATURES';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const REMOVE_FEATURES_FROM_SELECTION = 'REMOVE_FEATURES_FROM_SELECTION';
export const UPDATE_MAP_VIEW_SETTINGS = 'UPDATE_MAP_VIEW_SETTINGS';

// Map origin-related actions
export const CLEAR_ORIGIN = 'CLEAR_ORIGIN';
export const SET_AXIS_TYPE = 'SET_AXIS_TYPE';
export const SET_ORIGIN = 'SET_ORIGIN';

// Layer-related actions
export const ADD_LAYER = 'ADD_LAYER';
export const ADJUST_LAYER_Z_INDEX = 'ADJUST_LAYER_Z_INDEX';
export const CHANGE_LAYER_TYPE = 'CHANGE_LAYER_TYPE';
export const CLOSE_LAYERS_DIALOG = 'CLOSE_LAYERS_DIALOG';
export const REMOVE_LAYER = 'REMOVE_LAYER';
export const RENAME_LAYER = 'RENAME_LAYER';
export const SHOW_LAYERS_DIALOG = 'SHOW_LAYERS_DIALOG';
export const SET_LAYER_PARAMETER_BY_ID = 'SET_LAYER_PARAMETER_BY_ID';
export const SET_LAYER_PARAMETERS_BY_ID = 'SET_LAYER_PARAMETERS_BY_ID';
export const TOGGLE_LAYER_VISIBILITY = 'TOGGLE_LAYER_VISIBILITY';

// Feature-related actions
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURES = 'REMOVE_FEATURES';
export const RENAME_FEATURE = 'RENAME_FEATURE';
export const SET_FEATURE_COLOR = 'SET_FEATURE_COLOR';
export const UPDATE_FEATURE_COORDINATES = 'UPDATE_FEATURE_COORDINATES';
export const UPDATE_FEATURE_FILL = 'UPDATE_FEATURE_FILL';
export const UPDATE_FEATURE_VISIBILITY = 'UPDATE_FEATURE_VISIBILITY';

// Feature editor dialog related actions
export const CLOSE_FEATURE_EDITOR_DIALOG = 'CLOSE_FEATURE_EDITOR_DIALOG';
export const SET_FEATURE_EDITOR_DIALOG_TAB = 'SET_FEATURE_EDITOR_DIALOG_TAB';
export const SHOW_FEATURE_EDITOR_DIALOG = 'SHOW_FEATURE_EDITOR_DIALOG';

// Saved location related actions
export const EDIT_SAVED_LOCATION = 'EDIT_SAVED_LOCATION';
export const CANCEL_LOCATION_EDITING = 'CANCEL_LOCATION_EDITING';
export const CLOSE_SAVED_LOCATION_EDITOR_DIALOG =
  'CLOSE_SAVED_LOCATION_EDITOR_DIALOG';

// Actions related to the authentication / deauthentication dialogs
export const SHOW_AUTHENTICATION_DIALOG = 'SHOW_AUTHENTICATION_DIALOG';
export const CLOSE_AUTHENTICATION_DIALOG = 'CLOSE_AUTHENTICATION_DIALOG';
export const SHOW_DEAUTHENTICATION_DIALOG = 'SHOW_DEAUTHENTICATION_DIALOG';
export const CLOSE_DEAUTHENTICATION_DIALOG = 'CLOSE_DEAUTHENTICATION_DIALOG';

// Geofence settings related actions
export const CLOSE_GEOFENCE_SETTINGS_DIALOG = 'CLOSE_GEOFENCE_SETTINGS_DIALOG';
export const SHOW_GEOFENCE_SETTINGS_DIALOG = 'SHOW_GEOFENCE_SETTINGS_DIALOG';
export const UPDATE_GEOFENCE_SETTINGS = 'UPDATE_GEOFENCE_SETTINGS';

// Server settings related actions
export const CLOSE_SERVER_SETTINGS_DIALOG = 'CLOSE_SERVER_SETTINGS_DIALOG';
export const SHOW_SERVER_SETTINGS_DIALOG = 'SHOW_SERVER_SETTINGS_DIALOG';
export const SET_SERVER_SETTINGS_DIALOG_TAB = 'SET_SERVER_SETTINGS_DIALOG_TAB';
export const UPDATE_SERVER_SETTINGS = 'UPDATE_SERVER_SETTINGS';

// Settings-related actions
export const CLOSE_APP_SETTINGS_DIALOG = 'CLOSE_APP_SETTINGS_DIALOG';
export const SET_APP_SETTINGS_DIALOG_TAB = 'SET_APP_SETTINGS_DIALOG_TAB';
export const SHOW_APP_SETTINGS_DIALOG = 'SHOW_APP_SETTINGS_DIALOG';
export const TOGGLE_APP_SETTINGS_DIALOG = 'TOGGLE_APP_SETTINGS_DIALOG';

// Actions related to the "Messages" dialog
export const ADD_ERROR_MESSAGE_IN_MESSAGES_DIALOG =
  'ADD_ERROR_MESSAGE_IN_MESSAGES_DIALOG';
export const ADD_INBOUND_MESSAGE = 'ADD_INBOUND_MESSAGE';
export const ADD_OUTBOUND_MESSAGE_TO_SELECTED_UAV =
  'ADD_OUTBOUND_MESSAGE_TO_SELECTED_UAV';
export const CLEAR_MESSAGES_OF_SELECTED_UAV = 'CLEAR_MESSAGES_OF_SELECTED_UAV';
export const CLOSE_MESSAGES_DIALOG = 'CLOSE_MESSAGES_DIALOG';
export const SELECT_UAV_IN_MESSAGES_DIALOG = 'SELECT_UAV_IN_MESSAGES_DIALOG';
export const SHOW_MESSAGES_DIALOG = 'SHOW_MESSAGES_DIALOG';

// Actions related to the global prompt dialog
export const CANCEL_PROMPT_DIALOG = 'CANCEL_PROMPT_DIALOG';
export const SHOW_PROMPT_DIALOG = 'SHOW_PROMPT_DIALOG';
export const SUBMIT_PROMPT_DIALOG = 'SUBMIT_PROMPT_DIALOG';

// Error handling related actions
export const CLOSE_ERROR_DIALOG = 'CLOSE_ERROR_DIALOG';
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
