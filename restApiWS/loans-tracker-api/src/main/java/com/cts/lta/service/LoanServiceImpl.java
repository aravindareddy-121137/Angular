package com.cts.lta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.lta.entity.Loan;
import com.cts.lta.repos.LoanRepo;

@Service
public class LoanServiceImpl implements LoanService {

	@Autowired
	private LoanRepo loanRepo;

	@Override
	public Loan save(Loan loan) {
		return loanRepo.save(loan);
	}

	@Override
	public boolean exists(Long loanId) {
		return loanRepo.existsById(loanId);
	}

	@Override
	public void deleteById(Long loanId) {
		loanRepo.deleteById(loanId);		
	}

	@Override
	public Loan getById(Long loanId) {
		return loanRepo.findById(loanId).orElse(null);
	}

	@Override
	public List<Loan> getAllByConsumer(Long consumerId) {
		return loanRepo.getLoansByConsumer(consumerId);
	}
}
