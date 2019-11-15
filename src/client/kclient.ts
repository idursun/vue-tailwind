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

  async getServices(filter?: Record<string, string>): Promise<ServiceList> {
    let url = "api/v1/services";


    if (filter != null) {
      url = url + "?labelSelector="
      for (const label in filter) {
        url += `${label}=${encodeURIComponent(filter[label])}`
      }
    }

    let response = await fetch(url);
    return (await response.json()) as ServiceList;
  }
}
