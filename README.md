# Usar kafka desde Nestjs

Este es un proyecto backend desarrollado con NestJS y kafkajs donde nos conectaremos a kafka para construir un consumer y un producer ademas todo lo estamos documentando con swagger y dejamos un docker compose con todos los componentes necesarios.

## Características

- producer
- consumer
- swagger document

## Requisitos Previos

Asegúrate de tener instalado lo siguiente antes de comenzar:

- Node.js (versión 18.x o superior) *(opcional)*
- docker

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/soyHouston256/nests-kafka.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nests-kafka
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración

1. Copia el archivo `.env.example` a `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` y configura las variables de entorno según sea necesario.

3. Si vas a correr con docker el valor de tu *KAFKA_BROKERS* en el .env debe de tener el valor:

   ```bash
   KAFKA_BROKERS=kafka:29092
   ```

   - Si lo vas a correr directo desde tu maquina entonces *KAFKA_BROKERS* debe de tener el valor:

   ```bash
   KAFKA_BROKERS=localhost:29092
   ```

   Ademas tienes que detener el imagen que se esta corriendo en docker para que no tengas conflicto ya que ambos se van a estar usando el mismo puerto.

## Ejecución

Solo necesitas correr el docker compose para que levanten todas las imagenes de docker necesarias

```bash
docker-compose up
```

- kafka
- kafka-ui
- zookeeper
- nestjs-app

El servidor estará disponible en `http://localhost:3000`.

## Pruebas

Para ejecutar las pruebas:

```bash
npm run test
```

Para pruebas e2e:

```bash
npm run test:e2e
```

## Documentación API

La documentación de la API está disponible en `http://localhost:3000/api` cuando el servidor está en ejecución.

## Contribuir

Las contribuciones son bienvenidas. Por favor.

Este post es un review de un articulo de [medium](https://devjaime.medium.com/que-es-kafka-y-como-implementarlo-en-nestjs-657e60468356)
