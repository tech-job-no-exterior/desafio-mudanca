# Questão

Você vai mudar para uma nova rua onde todas as facilidades ficam em prédios.
Os prédios possuem, além de apartamentos, todas as facilidades de lazer, educação, segurança e etc...

Você possui uma lista de facilidades e vai escolher morar no prédio que tenha
**a menor distância média entre as facilidades da sua lista**.

Por exemplo, você tem na sua lista de facilidades "hospital, escola e polícia".
Considere os ingredientes dos seguintes prédios:
```
Prédio 1: parque, escola, piscina
Prédio 2: polícia, piscina
Prédio 3: parque, canil, quadra de tênis
Prédio 4: hospital
Prédio 5: quadra de football, piscina, escola
```
O prédio que você vai escolher é o **Prédio 2**, porquê ele possui a menor distância média para o hospital, a escola e a polícia mais próximos.

Desenvolva uma solucão capaz de escolher o prédio ideal, baseado numa lista de facilidades.

# Entrada de dados

```
const buildings = [
  [
    {
      "name":"floor 1",
      "amenities":["high school","sauna"]
    },
    {
      "name":"floor 2",
      "amenities":["outdoor parking"]
    }
  ],
  [
    {
      "name":"floor 1",
      "amenities":["middle school","pool"]
    },
    {
      "name":"floor 2",
      "amenities":["garage"]
    }
  ]
  ...
]

const list = ["garage", "pool", ...]

```

