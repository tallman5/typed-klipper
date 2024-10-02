import { ConfigurableComponent } from "./configurableComponent";

export class CommentSection extends ConfigurableComponent {
    constructor(
        public lines: string[] = []
    ) {
        super("comment_section");
    }

    fromCfg(): string {
        throw new Error("Method not implemented.");
    }

    fromJSON(configKey: string, config: any) {
        throw new Error("Method not implemented.");
    }

    toCfg(): string {
        throw new Error("Method not implemented.");
    }

    toJSON() {
        throw new Error("Method not implemented.");
    }
}