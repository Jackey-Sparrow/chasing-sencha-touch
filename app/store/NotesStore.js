Ext.define('chasing-sencha-touch.store.NotesStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'chasing-sencha-touch.model.NotesModel',
        proxy: {
            type: 'ajax',
            url: 'notes.json',
            render: {
                type: 'json',
                roots:'notes'
            }
        },
        autoLoad: true
    }
});