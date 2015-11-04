Ext.define('chasing-sencha-touch.view.NoteEditor', {
    extend: 'Ext.form.Panel',
    xtype: 'noteeditor',
    requires: ['Ext.form.FieldSet'],

    config: {
        scrollable: 'vertical'
    },

    initialize: function () {
        var backButton = {
            xtype: 'button',
            ui: 'back',
            text: 'Home',
            handler: this.onBackHomeTap,
            scope: this
        };

        var saveButton = {
            xtype: 'button',
            ui: 'action',
            text: 'Save',
            handler: this.onSaveNoteTap,
            scope: this
        };
        var topToolBar = {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Edit Note',
            items: [
                backButton,
                {xtype: 'spacer'},
                saveButton
            ]
        };

        var deleteButton = {
            xtype: 'button',
            iconCls: 'trash',
            iconMask: true,
            scope: this
        };
    },
    onBackHomeTap: function () {
    },
    onSaveNoteTap: function () {
    }
});