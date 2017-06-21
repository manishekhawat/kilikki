export function createState (lexState) {
    let state = {
        expectedIndent: 0,
        tokens: [],
        lexState
    };
    state.currentScope = createScope(state);
    state.currentScope.identifiers = {
        'cast': 'function',
        'groakki': 'function',
        'duck': 'function',
        'darrfu': 'function'
    };
    return state;
}

export function createScope (state) {
    let identifiers = {}
    if (state.currentScope) {
        identifiers = Object.assign({}, state.currentScope.identifiers);
    }
    return {
        identifiers,
        parentScope: state.currentScope
    };
}
