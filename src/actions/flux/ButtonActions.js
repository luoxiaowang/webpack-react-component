var AppDispatcher = require('../../dispatcher/flux/AppDispatcher');

var ButtonActions = {
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  }
};

module.exports = ButtonActions;

