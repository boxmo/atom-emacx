#
# Copyright (c) 2014 by Lifted Studios. All Rights Reserved.
#

# Public: This class contains the top-level command functionality for the Emacx
# Flow package.
module.exports =
class EmacxFlow
  # Public: Auto-indents the current row in the active editor.
  autoIndent: ->
    editor = atom.workspace.getActiveTextEditor()
    editor.insertText('Hello, World!')
    return unless editor
    [row, _] = editor.getCursorBufferPosition().toArray()
    editor.autoIndentBufferRow(row)