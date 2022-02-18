class Token {
    constructor(type, symbolPointer, occurrenceIndex) {
        this.type = type;
        this.symbolPointer = symbolPointer;
        this.occurrenceIndex = occurrenceIndex;
    }
}

class Production {
    /**
     * 
     * @param {RegExp} pattern 
     * @param {*} type 
     * @param {*} ignore 
     * @param {*} info 
     */
    constructor(pattern, type, ignore, info = {}) {
        this.pattern = pattern;
        this.pattern.flags.replace('g', ''); // no global regex allowed
        this.type = type;
        this.ignore = ignore;
        this.info = info;
    }
    /**
     * tests whether a string matches this production
     * @param {String} str 
     */
    matches(str) {
        var match = this.pattern.exec(str);
        if (match?.length > 0 && match.index === 0) {
            return match[0];
        }
        return undefined;
    }

}

class SymbolTableRecord {
    constructor(charSequence, production) {
        this.charSequence = charSequence;
        this.production = production;
    }
}


/**
 * 
 * @param {string} source 
 * @returns 
 */
class LexicalAnalyzer {
    /**
     * 
     * @param {String} source 
     * @param {Production[]} productions 
     */
    constructor(source, productions, symbolTable = {}) {
        this.index = 0;
        this.length = source.length;
        this.source = source;
        this.productions = productions;
        // symbol table initialized with super values
        this.symbolTable = symbolTable;

    }
    putSymbol(charSequence, production) {
        if (this.symbolTable[charSequence])
            return this.symbolTable[charSequence]; // if already exists then return
        this.symbolTable[charSequence] = new SymbolTableRecord(charSequence, production);
        return this.symbolTable[charSequence];
    }
    nextToken() {
        /**
         * @algorithm
         *   Longest Match Rule
         */
        if(this.index >= this.source.length) return undefined;
        let occurrenceIndex = this.index;
        // evaluation
        let candidate, candidateLength = 0;
        const segment = this.source.substring(this.index);
        const evaluation = this.productions.map(p => { return { production: p, match: p.matches(segment) } }); // map every production to the length of its match
        evaluation.forEach((c) => { // linear search best candidate production
            if (c.match?.length > candidateLength) {
                candidateLength = c.match.length;
                candidate = c;
            }
        });
        if (candidate === undefined) { // no candidate
            throw { msg: `Unrecognized symbol (${this.source[this.index]})`, symbol: this.source[this.index], occurrenceIndex: occurrenceIndex };
        } 
        else if (candidate.production.ignore) { // this is ignored production, try again
            this.index += candidateLength; // move index
            return this.nextToken();
        }
        this.index += candidateLength; // move index
        let sym = this.putSymbol(candidate.match, candidate.production)
        return new Token(candidate.production.type, sym, occurrenceIndex);
    }
}

export {
    Token, Production, LexicalAnalyzer
};