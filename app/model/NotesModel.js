Ext.define('chasing-sencha-touch.model.NotesModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'title', type: 'string'}
        ]
    }
});