class IsThisTheEndCharacterSheet extends ActorSheet {
    /** @override */
    getData() {
      const data = super.getData();
      return data;
    }
  
    /** @override */
    activateListeners(html) {
      super.activateListeners(html);
      // Add any event listeners for your custom sheet here
    }
  }
  
  // Register the character sheet
  Actors.registerSheet("is-this-the-end", IsThisTheEndCharacterSheet, {
    types: ["character"],
    makeDefault: true
  });
  