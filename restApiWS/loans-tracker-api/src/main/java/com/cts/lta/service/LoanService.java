package com.cts.lta.service;

import java.util.List;

import com.cts.lta.entity.Loan;

public interface LoanService {
	Loan save(Loan loan);
	boolean exists(Long loanId);
	void deleteById(Long loanId);
	Loan getById(Long loanId);
	List<Loan> getAllByConsumer(Long consumerId);
}
