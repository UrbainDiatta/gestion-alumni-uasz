package uasz.alumni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uasz.alumni.model.Alumni;
import uasz.alumni.repository.AlumniRepository;

@RestController
@RequestMapping("/api/alumni")
public class AlumniController {

    @Autowired
    private AlumniRepository alumniRepository;

    @GetMapping
    public List<Alumni> getAll() {
        return alumniRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Alumni> getById(@PathVariable Long id) {
        return alumniRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // En tant qu'alumni, je souhaite rechercher un ancien par promotion
    // afin de retrouver mes camarades (Story vue dans le TP Jira).
    @GetMapping("/promotion/{annee}")
    public List<Alumni> getByPromotion(@PathVariable int annee) {
        return alumniRepository.findByPromotion(annee);
    }

    @PostMapping
    public Alumni create(@RequestBody Alumni alumni) {
        return alumniRepository.save(alumni);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Alumni> update(@PathVariable Long id, @RequestBody Alumni payload) {
        return alumniRepository.findById(id).map(existing -> {
            existing.setNom(payload.getNom());
            existing.setPrenom(payload.getPrenom());
            existing.setEmail(payload.getEmail());
            existing.setPromotion(payload.getPromotion());
            existing.setFiliere(payload.getFiliere());
            return ResponseEntity.ok(alumniRepository.save(existing));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!alumniRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        alumniRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
