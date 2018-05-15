package com.rbc.pet.petstore;

import static springfox.documentation.builders.PathSelectors.regex;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket newsApi() {
        return new Docket(DocumentationType.SWAGGER_2).groupName("pets").apiInfo(apiInfo()).select().paths(regex("/api/pet.*"))
            .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("Pet Store App").description("This is a sample Spring Boot Petstore server.").build();
    }
}
