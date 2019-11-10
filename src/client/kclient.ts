export interface DeploymentList {
  items: {
    metadata: {
      name: string;
      namespace: string;
      labels: Map<string, string>;
      annotations: Map<string, string>;
    };
    spec: {
      replicas: number;
    };
    status: {
      replicas: number;
      readyReplicas: number;
      availableReplicas: number;
    };
  }[];
}

export interface ServiceList {
  items: {
    metadata: {
      name: string;
      namespace: string;
      labels: Map<string, string>;
    };
    spec: {
      ports: [
        {
          name: string;
          protocol: string;
          port: number;
          targetPort: string;
        }
      ];
      selector: Map<string, string>;
      type: string;
    };
    status: {};
  }[];
}

export interface NamespaceList {
  items: {
    metadata: {
      name: string;
    };
    spec: {
      finalizers: string[];
    };
  }[];
}

export class KClient {
  async getNamespaces(): Promise<NamespaceList> {
    let response = await fetch("api/v1/namespaces");
    return (await response.json()) as NamespaceList;
  }

  async getDeployments(): Promise<DeploymentList> {
    let response = await fetch("apis/apps/v1/deployments");
    return (await response.json()) as DeploymentList;
  }

  async getServices(): Promise<ServiceList> {
    let response = await fetch("api/v1/services");
    return (await response.json()) as ServiceList;
  }
}
