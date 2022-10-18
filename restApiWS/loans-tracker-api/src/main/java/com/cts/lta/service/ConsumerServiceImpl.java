package com.cts.lta.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.lta.entity.Consumer;
import com.cts.lta.repos.ConsumerRepo;

@Service
public class ConsumerServiceImpl implements ConsumerService {

	@Autowired
	private ConsumerRepo consumerRepo;
	
	@Override
	public Consumer save(Consumer consumer) {
		return consumerRepo.save(consumer);
	}

	@Override
	public void deleteById(long consumerId) {
		consumerRepo.deleteById(consumerId);
	}

	@Override
	public boolean exists(long consumerId) {
		return consumerRepo.existsById(consumerId);
	}

	@Override
	public Consumer getById(long consumerId) {
		return consumerRepo.findById(consumerId).orElse(null);
	}

	@Override
	public List<Consumer> getAll() {
		return consumerRepo.findAll();
	}

}
