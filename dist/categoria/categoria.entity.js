import crypto from 'node:crypto';
export class categoria {
    constructor(nombre, id = crypto.randomUUID()) {
        this.nombre = nombre;
        this.id = id;
    }
}
//# sourceMappingURL=categoria.entity.js.map