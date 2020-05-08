FROM maven:3.5-jdk-8-alpine AS build
WORKDIR /usr/worker/app
COPY pom.xml ./ 
RUN mvn dependency:resolve
COPY src ./src
RUN mvn package

FROM openjdk:8-jre-alpine
COPY --from=build /usr/worker/app/target/worker-jar-with-dependencies.jar /usr/app/worker-jar-with-dependencies.jar
#ENTRYPOINT [ "java", "-jar", "/usr/app/worker-jar-with-dependencies.jar" ]
CMD ["java","-jar","/usr/app/worker-jar-with-dependencies.jar"]