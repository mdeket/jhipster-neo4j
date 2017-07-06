package com.mycompany.myapp.config;

import io.github.jhipster.config.JHipsterConstants;
import org.neo4j.ogm.session.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.health.DataSourceHealthIndicator;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.context.annotation.*;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.data.neo4j.transaction.Neo4jTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@Profile("!" + JHipsterConstants.SPRING_PROFILE_CLOUD)
@EnableNeo4jRepositories(basePackages = "com.mycompany.myapp.repository")
@EnableTransactionManagement
public class DatabaseConfiguration {

    private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);

    @Autowired
    private DataSource dataSource;

    @Bean
    public HealthIndicator dbHealthIndicator() {
        DataSourceHealthIndicator indicator = new DataSourceHealthIndicator(dataSource);
        indicator.setQuery("MATCH (n) RETURN n LIMIT 1;");
        return indicator;
    }

    @Bean
    public SessionFactory sessionFactory() {
        return new SessionFactory("com.mycompany.myapp.domain");
    }

    @Bean
    public Neo4jTransactionManager transactionManager() {
        Neo4jTransactionManager manager = new Neo4jTransactionManager(sessionFactory());
        return manager;
    }
}
