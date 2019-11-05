export interface DeploymentList {
  items: {
    metadata: {
      name: string;
      namespace: string;
    };
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
}
