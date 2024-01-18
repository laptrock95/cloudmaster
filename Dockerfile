# Usa la imagen oficial de Node con la versión específica
FROM node:18.15.0 AS build


# Establece el directorio de trabajo en /app
RUN mkdir /app
WORKDIR /app



# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Mensajes de depuración para verificar el contenido en el contexto de construcción
RUN ls -al

# Construye la aplicación React
RUN npm run build

# Usa la imagen oficial de Nginx para servir la aplicación construida
FROM nginx:alpine

# Copia los archivos de construcción de la aplicación React al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para arrancar Nginx cuando se inicie el contenedor
CMD ["nginx", "-g", "daemon off;"]
