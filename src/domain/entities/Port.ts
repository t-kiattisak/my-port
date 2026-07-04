export interface PortProps {
  id?: string;
  name: string;
  code: string;
  description: string;
  active: boolean;
}

export class Port {
  private props: PortProps;

  constructor(props: PortProps) {
    this.props = {
      ...props,
      id: props.id || Math.random().toString(36).substr(2, 9),
    };
  }

  public get id(): string {
    return this.props.id!;
  }

  public get name(): string {
    return this.props.name;
  }

  public get code(): string {
    return this.props.code;
  }

  public get description(): string {
    return this.props.description;
  }

  public get active(): boolean {
    return this.props.active;
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      description: this.description,
      active: this.active,
    };
  }
}
