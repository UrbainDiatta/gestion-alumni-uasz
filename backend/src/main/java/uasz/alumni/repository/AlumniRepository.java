package uasz.alumni.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import uasz.alumni.model.Alumni;

public interface AlumniRepository extends JpaRepository<Alumni, Long> {

    List<Alumni> findByPromotion(int promotion);
}
