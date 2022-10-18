package com.cts.lta.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="loans")
public class Loan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long loanId;
	private Double loanAmount;
	private Double roi;
	private Double terms;
	
	@ManyToOne
	@JsonProperty(access = Access.WRITE_ONLY)
	private Consumer consumer;
	
	public Loan() {
		// TODO Auto-generated constructor stub
	}

	public Loan(Long loanId, Double loanAmount, Double roi, Double terms, Consumer consumer) {
		super();
		this.loanId = loanId;
		this.loanAmount = loanAmount;
		this.roi = roi;
		this.terms = terms;
		this.consumer = consumer;
	}

	public Long getLoanId() {
		return loanId;
	}

	public void setLoanId(Long loanId) {
		this.loanId = loanId;
	}

	public Double getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(Double loanAmount) {
		this.loanAmount = loanAmount;
	}

	public Double getRoi() {
		return roi;
	}

	public void setRoi(Double roi) {
		this.roi = roi;
	}

	public Double getTerms() {
		return terms;
	}

	public void setTerms(Double terms) {
		this.terms = terms;
	}

	public Consumer getConsumer() {
		return consumer;
	}

	public void setConsumer(Consumer consumer) {
		this.consumer = consumer;
	}

	@Override
	public String toString() {
		return "Loan [loanId=" + loanId + ", loanAmount=" + loanAmount + ", roi=" + roi + ", terms=" + terms + "]";
	}
	
	
}
