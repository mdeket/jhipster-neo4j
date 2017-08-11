package com.mycompany.myapp.domain;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.neo4j.ogm.annotation.Property;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import java.time.Instant;


/**
 * Base abstract class for entities which will hold definitions for created, last modified by and created,
 * last modified by date.
 */
public abstract class AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @CreatedBy
    @Property(name = "created_by")
    @JsonIgnore
    private String createdBy;

    @CreatedDate
    @Property(name = "created_date")
    @JsonIgnore
    private Long createdDate = Instant.now().toEpochMilli();

    @LastModifiedBy
    @Property(name = "last_modified_by")
    @JsonIgnore
    private String lastModifiedBy;

    @LastModifiedDate
    @Property(name = "last_modified_date")
    @JsonIgnore
    private Long lastModifiedDate = Instant.now().toEpochMilli();

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Instant getCreatedDate() {
        return Instant.ofEpochMilli(createdDate);
    }

    public void setCreatedDate(Instant createdDate) {
        this.createdDate = createdDate.toEpochMilli();
    }

    public String getLastModifiedBy() {
        return lastModifiedBy;
    }

    public void setLastModifiedBy(String lastModifiedBy) {
        this.lastModifiedBy = lastModifiedBy;
    }

    public Instant getLastModifiedDate() {

        return Instant.ofEpochMilli(lastModifiedDate);
    }

    public void setLastModifiedDate(Instant lastModifiedDate) {

        this.lastModifiedDate = lastModifiedDate.toEpochMilli();
    }
}
