Ext.define('chasing-sencha-touch.view.NotesList', {
    extend: 'Ext.dataview.List',
    xtype: 'noteslist',

    config: {
        loadingText: 'loading...',
        onItemDisclosure: true,
        emptyText: [
            '<pre>',
            '<div class="note-list-empty-text">No notes found</div>',
            '</pre>'
        ].join(''),
        itemTpl: [
            '<pre>',
            '<div class="list-item-title">{title}</div>',
            '</pre>'
        ].join('')
    }
});