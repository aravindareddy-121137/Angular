package com.cts.lta.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="consumers")
public class Consumer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long consumerId;
	private String fullName;
	private String mailId;
	
	public Consumer() {
		// TODO Auto-generated constructor stub
	}

	public Consumer(Long consumerId, String fullName, String mailId) {
		super();
		this.consumerId = consumerId;
		this.fullName = fullName;
		this.mailId = mailId;
	}

	public Long getConsumerId() {
		return consumerId;
	}

	public void setConsumerId(Long consumerId) {
		this.consumerId = consumerId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((consumerId == null) ? 0 : consumerId.hashCode());
		result = prime * result + ((fullName == null) ? 0 : fullName.hashCode());
		result = prime * result + ((mailId == null) ? 0 : mailId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Consumer other = (Consumer) obj;
		if (consumerId == null) {
			if (other.consumerId != null)
				return false;
		} else if (!consumerId.equals(other.consumerId))
			return false;
		if (fullName == null) {
			if (other.fullName != null)
				return false;
		} else if (!fullName.equals(other.fullName))
			return false;
		if (mailId == null) {
			if (other.mailId != null)
				return false;
		} else if (!mailId.equals(other.mailId))
			return false;
		return true;
	}
	
	
}
