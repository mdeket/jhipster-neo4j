package com.mycompany.myapp.config;

import io.github.jhipster.config.JHipsterConstants;
import io.github.jhipster.domain.util.JSR310DateConverters.DateToZonedDateTimeConverter;
import io.github.jhipster.domain.util.JSR310DateConverters.ZonedDateTimeToDateConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.data.neo4j.Neo4jDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Profile;
import org.springframework.core.convert.converter.Converter;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.data.repository.query.QueryLookupStrategy;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import java.util.ArrayList;
import java.util.List;

@Configuration
@Profile("!" + JHipsterConstants.SPRING_PROFILE_CLOUD)
@EnableNeo4jRepositories(basePackages = "com.mycompany.myapp.repository", queryLookupStrategy = QueryLookupStrategy.Key.CREATE_IF_NOT_FOUND)
@Import(value = MongoAutoConfiguration.class)
public class DatabaseConfiguration extends Neo4jConfiguration {

    private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);
//
//    @Override
//    @Bean
//    public Neo4jServer neo4jServer() {
//        log.info("Initialising server connection");
//        return new RemoteServer("http://localhost:7474", "neo4j", "1234");
//    }
//
//    @Override
//    @Bean
//    public SessionFactory getSessionFactory() {
//        log.info("Initialising Session Factory");
//        return new SessionFactory("com.mycompany.myapp.domain");
//    }
//
//    @Override
//    @Bean
//    public Session getSession() throws Exception {
//        log.info("Initialising session-scoped Session Bean");
//        return super.getSession();
//    }
//
//    @Bean
//    public ValidatingMongoEventListener validatingMongoEventListener() {
//        return new ValidatingMongoEventListener(validator());
//    }
//
//    @Bean
//    public LocalValidatorFactoryBean validator() {
//        return new LocalValidatorFactoryBean();
//    }
//
//    @Bean
//    public CustomConversions customConversions() {
//        List<Converter<?, ?>> converters = new ArrayList<>();
//        converters.add(DateToZonedDateTimeConverter.INSTANCE);
//        converters.add(ZonedDateTimeToDateConverter.INSTANCE);
//        return new CustomConversions(converters);
//    }
//
//    @Bean
//    public Mongobee mongobee(MongoClient mongoClient, MongoTemplate mongoTemplate, MongoProperties mongoProperties) {
//        log.debug("Configuring Mongobee");
//        Mongobee mongobee = new Mongobee(mongoClient);
//        mongobee.setDbName(mongoProperties.getDatabase());
//        mongobee.setMongoTemplate(mongoTemplate);
//        // package to scan for migrations
//        mongobee.setChangeLogsScanPackage("com.mycompany.myapp.config.dbmigrations");
//        mongobee.setEnabled(true);
//        return mongobee;
//    }
}
