package com.mycompany.myapp.config.audit;

import com.mycompany.myapp.domain.PersistentAuditEvent;

import com.mycompany.myapp.domain.PersistentAuditEventData;
import org.springframework.boot.actuate.audit.AuditEvent;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class AuditEventConverter {

    /**
     * Convert a list of PersistentAuditEvent to a list of AuditEvent
     *
     * @param persistentAuditEvents the list to convert
     * @return the converted list.
     */
    public List<AuditEvent> convertToAuditEvent(Iterable<PersistentAuditEvent> persistentAuditEvents) {
        if (persistentAuditEvents == null) {
            return Collections.emptyList();
        }
        List<AuditEvent> auditEvents = new ArrayList<>();
        for (PersistentAuditEvent persistentAuditEvent : persistentAuditEvents) {
            auditEvents.add(convertToAuditEvent(persistentAuditEvent));
        }
        return auditEvents;
    }

    /**
     * Convert a PersistentAuditEvent to an AuditEvent
     *
     * @param persistentAuditEvent the event to convert
     * @return the converted list.
     */
    public AuditEvent convertToAuditEvent(PersistentAuditEvent persistentAuditEvent) {

        return new AuditEvent(Date.from(persistentAuditEvent.getAuditEventDate()), persistentAuditEvent.getPrincipal(),
            persistentAuditEvent.getAuditEventType(), convertDataToObjects(convertSetAuditsToMapString(persistentAuditEvent)));
    }

    /**
     * Internal conversion. This is needed to support the current SpringBoot actuator AuditEventRepository interface
     *
     * @param data the data to convert
     * @return a map of String, Object
     */
    public Map<String, Object> convertDataToObjects(Map<String, String> data) {
        Map<String, Object> results = new HashMap<>();

        if (data != null) {
            for (Map.Entry<String, String> entry : data.entrySet()) {
                results.put(entry.getKey(), entry.getValue());
            }
        }
        return results;
    }

    /**
     * Internal conversion. This method will allow to save additional data.
     * By default, it will save the object as string
     *
     * @param data the data to convert
     * @return a map of String, String
     */
    public Map<String, String> convertDataToStrings(Map<String, Object> data) {
        Map<String, String> results = new HashMap<>();

        if (data != null) {
            for (Map.Entry<String, Object> entry : data.entrySet()) {
                Object object = entry.getValue();

                // Extract the data that will be saved.
                if (object instanceof WebAuthenticationDetails) {
                    WebAuthenticationDetails authenticationDetails = (WebAuthenticationDetails) object;
                    results.put("remoteAddress", authenticationDetails.getRemoteAddress());
                    results.put("sessionId", authenticationDetails.getSessionId());
                } else if (object != null) {
                    results.put(entry.getKey(), object.toString());
                } else {
                    results.put(entry.getKey(), "null");
                }
            }
        }

        return results;
    }

    public Map<String, String> convertSetAuditsToMapString(PersistentAuditEvent persistentAuditEvent){
        Map<String, String> persistentAuditEvents = new HashMap<>();
        persistentAuditEvent.getData().stream().forEach(data -> {
            persistentAuditEvents.put(data.getName(), data.getValue());
        });
        return persistentAuditEvents;
    }

    public Map<String, Object> convertSetAuditsToMapObject(PersistentAuditEvent persistentAuditEvent){
        Map<String, Object> persistentAuditEvents = new HashMap<>();
        persistentAuditEvent.getData().stream().forEach(data -> {
            persistentAuditEvents.put(data.getName(), (Object)data.getValue());
        });
        return persistentAuditEvents;
    }

    public Set<PersistentAuditEventData> convertMapObjectToSetAuditsEventData(Map<String, Object> audits) {
        Set<PersistentAuditEventData> events = new HashSet<>();
        audits.forEach((key, value) -> {
            PersistentAuditEventData event = new PersistentAuditEventData();
            event.setName(key);
            event.setValue(value.toString());
            events.add(event);
        });
        return events;
    }

    public Set<PersistentAuditEventData> convertMapStringToSetAuditsEventData(Map<String, String> audits) {
        Set<PersistentAuditEventData> events = new HashSet<>();
        audits.forEach((key, value) -> {
            PersistentAuditEventData event = new PersistentAuditEventData();
            event.setName(key);
            event.setValue(value);
            events.add(event);
        });
        return events;
    }

}
