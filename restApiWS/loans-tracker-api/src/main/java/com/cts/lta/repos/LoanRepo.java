package com.cts.lta.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cts.lta.entity.Loan;

public interface LoanRepo extends JpaRepository<Loan, Long> {
	@Query("SELECT l FROM Loan l WHERE l.consumer.consumerId=:consumerId")
	List<Loan> getLoansByConsumer(Long consumerId);
}
