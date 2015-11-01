Ext.define('chasing-sencha-touch.controller.Notes', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            newNoteBtn: '#new-note-btn'
        },
        control: {
            newNoteBtn: {
                tap: 'onNewNote'
            }
        }
    },
    onNewNote: function () {
        console.log('new');
    },
    launch: function () {
        //this.callParent();
        console.log('launch');
    },
    init: function () {
        this.callParent();
        console.log('init')
    }
});