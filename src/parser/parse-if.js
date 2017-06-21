// Constants:
import { IF, ELSE } from '../keywords';
import { EQUALS } from '../operators';

// Dependencies:

import { BinaryExpression } from '../ast/binary-expression';
import { IfStatement } from '../ast/if-statement';
import { parseBlock } from './parse-block';
import { expectKeywords, matchKeywords } from './parse-keywords';
import { expectPunctuators } from './parse-punctuators';
import { expectIdentifier, transformIdentifier } from './parse-identifier';
import { parseBinaryExpression } from './parse-value';
import { expectSpace } from './parse-whitespace';

export function parseIf (state) {
    let ifToken = expectKeywords(state, IF);

    expectSpace(state);

    var left  = expectIdentifier(state);
    var leftModified = transformIdentifier(left);

    expectSpace(state);
    expectPunctuators(state, EQUALS); 

    let right = parseBinaryExpression(state, {
        requireSpace: true
    });

    let loc = ifToken.loc;
    let newBody = '';
    let test = new BinaryExpression(EQUALS, leftModified, right, loc);
    let body = parseBlock(state);
    let elseToken = matchKeywords(state, ELSE);
    if(elseToken){
        let expectElse = expectKeywords(state, ELSE);
        newBody = parseBlock(state);
        loc = expectElse.loc
    } 

   return new IfStatement(test, body, loc, newBody );
}
