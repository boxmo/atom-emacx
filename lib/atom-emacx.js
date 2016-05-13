'use babel';

import AtomEmacxView from './atom-emacx-view';
import { CompositeDisposable } from 'atom';

export default {

  atomEmacxView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomEmacxView = new AtomEmacxView(state.atomEmacxViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomEmacxView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-emacx:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomEmacxView.destroy();
  },

  serialize() {
    return {
      atomEmacxViewState: this.atomEmacxView.serialize()
    };
  },

  toggle() {
    console.log('AtomEmacx was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
