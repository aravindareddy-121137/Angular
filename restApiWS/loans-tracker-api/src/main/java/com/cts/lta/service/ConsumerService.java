package com.cts.lta.service;

import java.util.List;

import com.cts.lta.entity.Consumer;

public interface ConsumerService {

	Consumer save(Consumer consuemr);
	void deleteById(long consumerId);
	boolean exists(long consumerId);
	Consumer getById(long consumerId);
	List<Consumer> getAll();
}
