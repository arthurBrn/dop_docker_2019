FROM maven:3-5-jdk-8-alpine AS builder
WORKDIR /usr/app
COPY pom.xml ./ 
RUN mvn dependency:resolve
COPY src ./src
RUN mvn package

FROM openjdk:8-jre-alpine
COPY --from=builder /usr/app/target/worker-jar-with-dependencies.jar /usr/app/worker-jar-with-dependencies.jar
ENTRYPOINT [ "java", "-jar", "/usr/app/worker-jar-with-dependencies.jar" ]