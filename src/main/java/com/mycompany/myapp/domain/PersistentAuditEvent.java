package com.mycompany.myapp.domain;

import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Property;
import org.neo4j.ogm.annotation.Relationship;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

/**
 * Persist AuditEvent managed by the Spring Boot actuator
 * @see org.springframework.boot.actuate.audit.AuditEvent
 */
@NodeEntity(label = "jhi_persistent_audit_event")
public class PersistentAuditEvent extends AbstractEntity {
    @NotNull
    private String principal;

    private Long auditEventDate;

    @Property(name = "event_type")
    private String auditEventType;

    @Relationship
    private Set<PersistentAuditEventData> data = new HashSet<>();

    public String getPrincipal() {
        return principal;
    }

    public void setPrincipal(String principal) {
        this.principal = principal;
    }

    public Instant getAuditEventDate() {

        return Instant.ofEpochMilli(auditEventDate);
    }

    public void setAuditEventDate(Instant auditEventDate) {

        this.auditEventDate = auditEventDate.toEpochMilli();
    }

    public String getAuditEventType() {
        return auditEventType;
    }

    public void setAuditEventType(String auditEventType) {
        this.auditEventType = auditEventType;
    }

    public Set<PersistentAuditEventData> getData() {
        return data;
    }

    public void setData(Set<PersistentAuditEventData> data) {
        this.data = data;
    }
}
