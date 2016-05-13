{CompositeDisposable} = require 'atom'

module.exports =
  subscriptions: null

  activate: ->
    @subscriptions = new CompositeDisposable
    @subscriptions.add atom.commands.add 'atom-workspace',
      'atom-emacx:auto-indent': => @autoIndent()

  deactivate: ->
    @subscriptions.dispose()

  autoIndent: ->
    if editor = atom.workspace.getActiveTextEditor()
      editor.autoIndentSelectedRows()
