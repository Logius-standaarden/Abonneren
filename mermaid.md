# Mermaid diagram


<figure>

```mermaid
graph TD
    subgraph Messaging_Laag["Messaging Laag"]
        subgraph Gov_Org_A["Gov Org A"]
            A1[AMQP Broker A<br/>RabbitMQ, Qpid]
        end

        subgraph Gov_Org_B["Gov Org B"]
            B1[AMQP Broker B<br/>RabbitMQ, Qpid]
        end

        A1 <--> B1

        A2[CloudEvents Event Producer] --> A1
        B2[CloudEvents Event Consumer] --> B1

        A3[OAuth2/OIDC/AuthZen<br/>AuthN & AuthZ] --> A2
        B3[OAuth2/OIDC/AuthZen<br/>AuthN & AuthZ] --> B2
    end

    subgraph Governance["Governance & Policy Laag"]
        G1[RBAC/ABAC Policies]
        G2[Audit Logging]
        G3[Compliance Monitoring]
    end

    subgraph Identity["Federated Identity Provider"]
        I1[OAuth 2.0 / OIDC]
    end
```

<figcaption>Mermaid voorbeeld</figcaption>
</figure>
