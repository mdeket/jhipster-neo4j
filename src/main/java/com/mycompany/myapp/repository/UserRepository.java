package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.GraphRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.time.Instant;

/**
 * Spring Data Neo4j repository for the User entity.
 */
@Repository
@Transactional
public interface UserRepository extends GraphRepository<User> {

//    Optional<User> findOneByActivationKey(String activationKey);

    List<User> findAllByActivatedIsFalseAndCreatedDateLessThan(Long dateTime);

//    Optional<User> findOneByResetKey(String resetKey);
//
//    Optional<User> findOneByEmail(String email);
//
//    Optional<User> findOneByLogin(String login);

    User findOneByActivationKey(String activationKey);
    User findOneByLogin(String login);
    User findOneByEmail(String email);
    User findOneByResetKey(String resetKey);

    @Query("match (u:jhi_user) where u.login <> 'anonymoususer' return u")
    Page<User> findAllByLoginNot(Pageable pageable, String login);
}
