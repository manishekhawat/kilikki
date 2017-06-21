// Constants:
const GROAKKI = 'groakki'
const DUCK = 'duck'
const DARRFU = 'darrfu'


// Dependencies:
import esquery from 'esquery';

export function lint (ast) {
    let unforgivableCurses =  [GROAKKI, DUCK, DARRFU];

    unforgivableCurses.forEach(unforgivable => {
        let nodes = esquery.query(ast, `CallExpression[callee.name="${unforgivable}"] Identifier`);
        nodes.forEach(identifier => {
            if(identifier.name == unforgivable)
                identifier.name = 'console.log'
        });
    });

    return ast;
}
