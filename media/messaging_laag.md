---
config:
  theme: neo-dark
  architecture-beta:
    htmlLabels: false
---
architecture-beta
    group not[Messaging Laag]
    group gova[Gov Org A] in not
    group govb[Gov Org B] in not

    service s1(cloud)[AMQP Broker A] in gova
    service s2(cloud)[AMQP Broker B] in govb

    service ce1(server)[CloudEvents Event Producer] in not
    service ce2(server)[CloudEvents Event Consumer] in not

    service a1(database)[AuthN AuthZ] in not
    service a2(database)[AuthN AuthZ] in not

    s1:R <--> L:s2
    ce1:B --> T:s1
    ce2:B --> T:s2
    a1:B --> T:ce1
    a2:B --> T:ce2

