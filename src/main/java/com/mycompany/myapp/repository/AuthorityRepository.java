package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Authority;

import org.springframework.data.neo4j.repository.GraphRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data Neo4J repository for the Authority entity.
 */
@Repository
public interface AuthorityRepository extends GraphRepository<Authority> {
    public Authority findByName(String name);
}
