package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.PersistentAuditEvent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.neo4j.repository.GraphRepository;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

/**
 * Spring Data Neo4j repository for the PersistentAuditEvent entity.
 */
@Repository
public interface PersistenceAuditEventRepository extends GraphRepository<PersistentAuditEvent> {

    List<PersistentAuditEvent> findByPrincipal(String principal);

    List<PersistentAuditEvent> findByAuditEventDateAfter(Long after);

    List<PersistentAuditEvent> findByPrincipalAndAuditEventDateAfter(String principal, Long after);

    List<PersistentAuditEvent> findByPrincipalAndAuditEventDateAfterAndAuditEventType(String principle, Long after, String type);

    Page<PersistentAuditEvent> findAllByAuditEventDateBetween(Long fromDate, Long toDate, Pageable pageable);
}
