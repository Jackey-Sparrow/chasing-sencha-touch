Ext.define('chasing-sencha-touch.controller.Notes', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            noteContainer: 'notecontainer'
        },
        control: {
            noteContainer:{
                newNoteCmd:'onNewNote'
            }
        }
    },
    onNewNote: function () {
        console.log('newNoteCmd');
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