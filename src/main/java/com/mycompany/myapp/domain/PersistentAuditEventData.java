package com.mycompany.myapp.domain;

import org.neo4j.ogm.annotation.NodeEntity;

/**
 * Created by milandeket on 6/25/17.
 */
@NodeEntity
public class PersistentAuditEventData extends AbstractEntity{

    private String name;

    private String value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
