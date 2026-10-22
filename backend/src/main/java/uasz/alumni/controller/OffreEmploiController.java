package uasz.alumni.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uasz.alumni.model.OffreEmploi;
import uasz.alumni.repository.OffreEmploiRepository;

@RestController
@RequestMapping("/api/offres-emploi")
public class OffreEmploiController {

    @Autowired
    private OffreEmploiRepository offreEmploiRepository;

    @GetMapping
    public List<OffreEmploi> getAll() {
        return offreEmploiRepository.findAll();
    }

    @PostMapping
    public OffreEmploi create(@RequestBody OffreEmploi offre) {
        return offreEmploiRepository.save(offre);
    }
}
