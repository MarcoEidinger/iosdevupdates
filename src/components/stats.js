import React from "react";

const Stats = ({ stats }) => {
  return (
    <div class="grid grid-cols-1 gap-1 md:grid-cols-3 text-center">
      <div class="stat">
        <div class="stat-title">Total Blogs</div>
        <div class="stat-value text-primary">{stats.sites_total}</div>
        <div class="stat-desc">accessible through RSS</div>
      </div>
      <div class="stat">
        <div class="stat-title">Most Recent Blogs</div>
        <div class="stat-value text-success">{stats.sites_active_30d}</div>
        <div class="stat-desc">posted within the last 30 days</div>
      </div>
      <div class="stat">
        <div class="stat-title">Active Blogs</div>
        <div class="stat-value">{stats.sites_active_90d_in_percentage}%</div>
        <div class="stat-desc">in the last 90 days</div>
      </div>
    </div>
  );
};

export default Stats;
