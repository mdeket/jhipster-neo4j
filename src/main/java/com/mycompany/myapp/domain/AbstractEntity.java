package com.mycompany.myapp.domain;

import org.neo4j.ogm.annotation.GraphId;

import java.io.Serializable;

/**
 * Created by milandeket on 6/25/17.
 */
public abstract class AbstractEntity implements Serializable{

    @GraphId
    protected Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || id == null || getClass() != o.getClass()) return false;

        AbstractEntity entity = (AbstractEntity) o;

        return id.equals(entity.id);
    }

    @Override
    public int hashCode() {
        return (id == null) ? -1 : id.hashCode();
    }
}
