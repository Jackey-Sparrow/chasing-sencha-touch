Ext.define('chasing-sencha-touch.view.NoteContainer', {
    extend: 'Ext.Container',
    xtype: 'notecontainer',
    config: {
        layout: {type: 'fit'}
    },
    initialize: function () {
        var newNOteBtn = {
            xtype: 'button',
            text: 'New',
            ui: 'action',
            action: 'new-note',
            handler: this.onNewNoteBtnTap,
            scope: this
        };
        var topToolBar = {
            xtype: 'toolbar',
            title: 'My Note',
            docked: 'top',
            items: [
                {
                    xtype: 'spacer'
                },
                newNOteBtn
            ]
        };
        var notesList = {
            xtype: 'noteslist',
            store: Ext.getStore('NotesStore'),
            listeners: {
                disclose: {
                    fn: this.onNoteListDisclose,
                    scope: this
                }
            }
        };
        this.add([topToolBar, notesList]);
    },
    onNewNoteBtnTap: function () {
        console.log('new');
    },
    onNoteListDisclose: function () {
        console.log('close');
    }

});
